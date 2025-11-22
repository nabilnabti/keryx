-- Create restaurants table
CREATE TABLE IF NOT EXISTS restaurants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  position INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  customer_phone TEXT,
  order_type TEXT DEFAULT 'pickup', -- pickup, delivery, dine-in
  pickup_time TIMESTAMP WITH TIME ZONE,
  delivery_address TEXT,
  total_price NUMERIC(10, 2) NOT NULL DEFAULT 0,
  currency TEXT DEFAULT 'EUR',
  notes TEXT,
  status TEXT DEFAULT 'new', -- new, preparing, ready, completed, cancelled
  source TEXT DEFAULT 'voice', -- voice, web
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE SET NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price NUMERIC(10, 2) NOT NULL,
  line_total NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create phone_settings table
CREATE TABLE IF NOT EXISTS phone_settings (
  restaurant_id UUID PRIMARY KEY REFERENCES restaurants(id) ON DELETE CASCADE,
  phone_number TEXT,
  language TEXT DEFAULT 'fr-FR',
  agent_style TEXT DEFAULT 'professional',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE phone_settings ENABLE ROW LEVEL SECURITY;

-- Create policies (Simplified for MVP - Public read for menu, Authenticated for dashboard)
-- Note: In a real app, we would have stricter policies based on auth.uid() linking to restaurant_id

-- Categories: Public read (for menu API/Voice agent), Restaurant owner write
CREATE POLICY "Public categories read" ON categories FOR SELECT USING (true);
CREATE POLICY "Owner categories all" ON categories FOR ALL USING (true); -- TODO: Restrict to owner

-- Products: Public read, Restaurant owner write
CREATE POLICY "Public products read" ON products FOR SELECT USING (true);
CREATE POLICY "Owner products all" ON products FOR ALL USING (true); -- TODO: Restrict to owner

-- Orders: Public insert (for voice agent/web), Restaurant owner read/update
CREATE POLICY "Public orders insert" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Owner orders all" ON orders FOR ALL USING (true); -- TODO: Restrict to owner

-- Order Items: Public insert, Restaurant owner read/update
CREATE POLICY "Public order_items insert" ON order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Owner order_items all" ON order_items FOR ALL USING (true); -- TODO: Restrict to owner

-- Phone Settings: Owner all
CREATE POLICY "Owner phone_settings all" ON phone_settings FOR ALL USING (true); -- TODO: Restrict to owner

-- Restaurants: Public insert (signup), Owner read/update
CREATE POLICY "Public restaurants insert" ON restaurants FOR INSERT WITH CHECK (true);
CREATE POLICY "Owner restaurants all" ON restaurants FOR ALL USING (true); -- TODO: Restrict to owner
