'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, Tag, Coffee, AlertCircle } from 'lucide-react';

export default function MenuPage() {
    const [restaurantId, setRestaurantId] = useState<string | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [categories, setCategories] = useState<any[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const router = useRouter();

    // Form states
    const [newCategoryName, setNewCategoryName] = useState('');
    const [newProductName, setNewProductName] = useState('');
    const [newProductDescription, setNewProductDescription] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const fetchData = useCallback(async (id: string) => {
        setLoading(true);
        try {
            const { data: cats, error: catsError } = await supabaseClient
                .from('categories')
                .select('*')
                .eq('restaurant_id', id)
                .order('position', { ascending: true });

            const { data: prods, error: prodsError } = await supabaseClient
                .from('products')
                .select('*')
                .eq('restaurant_id', id)
                .order('created_at', { ascending: false });

            if (catsError) throw catsError;
            if (prodsError) throw prodsError;

            if (cats) setCategories(cats);
            if (prods) setProducts(prods);
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Erreur lors du chargement des données');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const id = localStorage.getItem('restaurant_id');
        if (!id) {
            router.push('/login');
        } else {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setRestaurantId(id);
            fetchData(id);
        }
    }, [router, fetchData]);

    async function addCategory() {
        if (!restaurantId || !newCategoryName.trim()) {
            setError('Le nom de la catégorie est requis');
            return;
        }

        try {
            setError(null);
            const { error } = await supabaseClient.from('categories').insert({
                restaurant_id: restaurantId,
                name: newCategoryName.trim()
            });

            if (error) throw error;

            setNewCategoryName('');
            setSuccess('Catégorie ajoutée avec succès !');
            setTimeout(() => setSuccess(null), 3000);
            fetchData(restaurantId);
        } catch (err) {
            console.error('Error adding category:', err);
            setError('Erreur lors de l\'ajout de la catégorie');
        }
    }

    async function addProduct() {
        if (!restaurantId || !newProductName.trim() || !newProductPrice || !selectedCategory) {
            setError('Tous les champs obligatoires doivent être remplis');
            return;
        }

        const price = parseFloat(newProductPrice);
        if (isNaN(price) || price < 0) {
            setError('Le prix doit être un nombre positif');
            return;
        }

        try {
            setError(null);
            const { error } = await supabaseClient.from('products').insert({
                restaurant_id: restaurantId,
                category_id: selectedCategory,
                name: newProductName.trim(),
                description: newProductDescription.trim() || null,
                price: price
            });

            if (error) throw error;

            setNewProductName('');
            setNewProductDescription('');
            setNewProductPrice('');
            setSuccess('Produit ajouté avec succès !');
            setTimeout(() => setSuccess(null), 3000);
            fetchData(restaurantId);
        } catch (err) {
            console.error('Error adding product:', err);
            setError('Erreur lors de l\'ajout du produit');
        }
    }

    async function deleteCategory(categoryId: string) {
        if (!confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ? Les produits associés seront également supprimés.')) {
            return;
        }

        try {
            setError(null);
            const { error } = await supabaseClient
                .from('categories')
                .delete()
                .eq('id', categoryId);

            if (error) throw error;

            setSuccess('Catégorie supprimée');
            setTimeout(() => setSuccess(null), 3000);
            if (restaurantId) fetchData(restaurantId);
        } catch (err) {
            console.error('Error deleting category:', err);
            setError('Erreur lors de la suppression');
        }
    }

    async function deleteProduct(productId: string) {
        if (!confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
            return;
        }

        try {
            setError(null);
            const { error } = await supabaseClient
                .from('products')
                .delete()
                .eq('id', productId);

            if (error) throw error;

            setSuccess('Produit supprimé');
            setTimeout(() => setSuccess(null), 3000);
            if (restaurantId) fetchData(restaurantId);
        } catch (err) {
            console.error('Error deleting product:', err);
            setError('Erreur lors de la suppression');
        }
    }

    if (!restaurantId) return null;

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Gestion du Menu</h2>
                <p className="text-gray-400">
                    Crée tes catégories et produits. L'IA les utilisera pour répondre aux clients.
                </p>
            </div>

            {/* Feedback Messages */}
            {error && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    {error}
                </div>
            )}
            {success && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                    {success}
                </div>
            )}

            <div className="grid gap-8 lg:grid-cols-2">
                {/* Categories Section */}
                <div className="space-y-6">
                    <div className="glass-panel p-6 rounded-xl border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <Tag className="w-5 h-5 text-purple-400" />
                            Catégories
                        </h3>
                        <div className="flex gap-4 mb-6">
                            <Input
                                placeholder="Ex: Burgers, Boissons..."
                                value={newCategoryName}
                                onChange={(e) => setNewCategoryName(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addCategory()}
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500/50 focus:ring-purple-500/20"
                            />
                            <Button onClick={addCategory} variant="glass" className="bg-purple-600/80 hover:bg-purple-500/80" disabled={!newCategoryName.trim()}>
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="space-y-3">
                            {categories.map((cat) => (
                                <div key={cat.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                    <span className="font-medium text-white">{cat.name}</span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-gray-500 hover:text-red-400 hover:bg-red-500/10 h-8 w-8 p-0"
                                        onClick={() => deleteCategory(cat.id)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                            {categories.length === 0 && (
                                <p className="text-sm text-gray-500 text-center py-4">Aucune catégorie. Commence par en créer une !</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <div className="space-y-6">
                    <div className="glass-panel p-6 rounded-xl border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <Coffee className="w-5 h-5 text-blue-400" />
                            Produits
                        </h3>

                        <div className="space-y-4 mb-6 p-4 rounded-lg bg-white/5 border border-white/5">
                            <div className="space-y-2">
                                <Label className="text-gray-300">Catégorie <span className="text-red-400">*</span></Label>
                                <select
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <option value="" className="bg-gray-900">Choisir une catégorie...</option>
                                    {categories.map(c => (
                                        <option key={c.id} value={c.id} className="bg-gray-900">{c.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-gray-300">Nom du produit <span className="text-red-400">*</span></Label>
                                <Input
                                    placeholder="Ex: Burger Classic"
                                    value={newProductName}
                                    onChange={(e) => setNewProductName(e.target.value)}
                                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-gray-300">Description (optionnel)</Label>
                                <Textarea
                                    placeholder="Ex: Burger avec steak haché, salade, tomate, oignon..."
                                    value={newProductDescription}
                                    onChange={(e) => setNewProductDescription(e.target.value)}
                                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 min-h-[80px]"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-gray-300">Prix (€) <span className="text-red-400">*</span></Label>
                                <Input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    placeholder="0.00"
                                    value={newProductPrice}
                                    onChange={(e) => setNewProductPrice(e.target.value)}
                                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-600"
                                />
                            </div>

                            <Button
                                onClick={addProduct}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                                disabled={!selectedCategory || !newProductName.trim() || !newProductPrice}
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Ajouter le produit
                            </Button>
                        </div>

                        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {products.map((prod) => (
                                <div key={prod.id} className="flex flex-col gap-2 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <p className="font-medium text-white">{prod.name}</p>
                                            {prod.description && (
                                                <p className="text-xs text-gray-400 mt-1">{prod.description}</p>
                                            )}
                                            <p className="text-xs text-gray-500 mt-1">
                                                {categories.find(c => c.id === prod.category_id)?.name}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="font-bold text-blue-400 whitespace-nowrap">{Number(prod.price).toFixed(2)} €</span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-gray-500 hover:text-red-400 hover:bg-red-500/10 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                                onClick={() => deleteProduct(prod.id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {products.length === 0 && (
                                <p className="text-sm text-gray-500 text-center py-4">Aucun produit. Ajoute-en un ci-dessus !</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
