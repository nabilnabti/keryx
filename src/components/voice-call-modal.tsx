'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Phone, PhoneOff, Mic, MicOff, AlertCircle, Lightbulb } from 'lucide-react';
import { RetellWebClient } from 'retell-client-js-sdk';
import Image from 'next/image';

interface VoiceCallModalProps {
    isOpen: boolean;
    onClose: () => void;
    agentId: string;
    primaryColor?: string;
    secondaryColor?: string;
}

export function VoiceCallModal({ isOpen, onClose, agentId, primaryColor = '#E11D48', secondaryColor = '#F97316' }: VoiceCallModalProps) {
    const [isConnecting, setIsConnecting] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [transcript, setTranscript] = useState<string[]>([]);

    const retellClient = useRef<RetellWebClient | null>(null);

    useEffect(() => {
        // Initialize Retell client
        retellClient.current = new RetellWebClient();

        // Event listeners
        retellClient.current.on('call_started', () => {
            console.log('Call started');
            setIsConnected(true);
            setIsConnecting(false);
        });

        retellClient.current.on('call_ended', () => {
            console.log('Call ended');
            setIsConnected(false);
            setIsConnecting(false);
        });

        retellClient.current.on('agent_start_talking', () => {
            console.log('Agent started talking');
        });

        retellClient.current.on('agent_stop_talking', () => {
            console.log('Agent stopped talking');
        });

        retellClient.current.on('update', (update) => {
            console.log('Update received:', update);
            // Only show complete transcripts with valid role and content
            if (update.transcript?.role && update.transcript?.content &&
                update.transcript.role !== 'undefined' &&
                update.transcript.content !== 'undefined' &&
                update.transcript.content.trim().length > 0) {
                const role = update.transcript.role === 'agent' ? 'Agent' : 'Vous';
                setTranscript((prev) => [...prev, `${role}: ${update.transcript.content}`]);
            }
        });

        retellClient.current.on('error', (error) => {
            console.error('Retell error:', error);
            setError('Erreur de connexion. Veuillez réessayer.');
            setIsConnecting(false);
            setIsConnected(false);
        });

        return () => {
            if (retellClient.current) {
                retellClient.current.stopCall();
            }
        };
    }, []);

    const startCall = async () => {
        try {
            setIsConnecting(true);
            setError(null);
            setTranscript([]);

            // Check browser compatibility
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error('Votre navigateur ne supporte pas l\'accès au microphone. Essayez avec Chrome, Firefox ou Safari récent.');
            }

            // Explicitly request microphone permission (critical for iOS Safari)
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                // Stop the stream immediately as Retell SDK will handle it
                stream.getTracks().forEach(track => track.stop());
                console.log('Microphone permission granted');
            } catch (micError) {
                console.error('Microphone permission denied:', micError);
                throw new Error('Accès au microphone refusé. Veuillez autoriser l\'accès au microphone dans les paramètres de votre navigateur.');
            }

            // Get access token from our API
            const response = await fetch('/api/retell/web-call', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ agent_id: agentId }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
                throw new Error(errorData.error || 'Failed to get access token');
            }

            const { access_token } = await response.json();

            console.log('Starting call with access token');

            // Start the call
            await retellClient.current?.startCall({
                accessToken: access_token,
            });

            console.log('Call started successfully');
        } catch (err) {
            console.error('Error starting call:', err);
            const errorMessage = err instanceof Error ? err.message : 'Impossible de démarrer l\'appel. Vérifiez votre connexion.';
            setError(errorMessage);
            setIsConnecting(false);
        }
    };

    const endCall = () => {
        retellClient.current?.stopCall();
        setIsConnected(false);
        setIsConnecting(false);
    };

    const toggleMute = () => {
        if (isMuted) {
            retellClient.current?.unmute();
        } else {
            retellClient.current?.mute();
        }
        setIsMuted(!isMuted);
    };

    const handleClose = () => {
        if (isConnected) {
            endCall();
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
            <div className="relative w-full max-w-md mx-4">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                >
                    <X className="w-8 h-8" />
                </button>

                {/* Modal card */}
                <div className="glass-panel rounded-2xl border-2 p-8 shadow-2xl" style={{ borderColor: `${primaryColor}4D`, backgroundColor: 'rgba(11, 14, 20, 0.95)' }}>
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <Image src="/keryx-logo.png" alt="KERYX" width={80} height={80} className="relative z-10" />
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center mb-2" style={{ color: '#F3F4F6' }}>
                        Démo Vocale
                    </h2>

                    {/* Status */}
                    <p className="text-center mb-6" style={{ color: '#9CA3AF' }}>
                        {isConnecting ? 'Connexion en cours...' : isConnected ? 'Appel en cours...' : 'Prêt à démarrer'}
                    </p>

                    {/* Error message */}
                    {error && (
                        <div className="mb-6 p-4 rounded-lg border" style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)', borderColor: 'rgba(225, 29, 72, 0.3)' }}>
                            <p className="text-sm flex items-center gap-2" style={{ color: '#E11D48' }}>
                                <AlertCircle className="w-4 h-4" />
                                {error}
                            </p>
                        </div>
                    )}

                    {/* Transcript */}
                    {isConnected && transcript.length > 0 && (
                        <div className="mb-6 p-4 rounded-xl border max-h-48 overflow-y-auto" style={{ backgroundColor: 'rgba(31, 41, 55, 0.5)', borderColor: 'rgba(243, 244, 246, 0.1)' }}>
                            <div className="space-y-2">
                                {transcript.map((line, index) => {
                                    const isAgent = line.startsWith('Agent:');
                                    return (
                                        <div key={index} className={`text-sm ${isAgent ? 'text-left' : 'text-right'}`}>
                                            <span className={`inline-block px-3 py-2 rounded-lg ${isAgent ? 'rounded-tl-none' : 'rounded-tr-none'}`}
                                                style={{
                                                    backgroundColor: isAgent ? 'rgba(249, 115, 22, 0.2)' : 'rgba(225, 29, 72, 0.2)',
                                                    color: '#F3F4F6'
                                                }}>
                                                {line}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Controls */}
                    <div className="flex gap-4 justify-center mb-6">
                        {!isConnected ? (
                            <button
                                onClick={startCall}
                                disabled={isConnecting}
                                className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                style={{
                                    backgroundColor: primaryColor,
                                    color: '#F3F4F6'
                                }}
                            >
                                <Phone className="w-6 h-6" />
                                {isConnecting ? 'Connexion...' : 'Démarrer l\'appel'}
                            </button>
                        ) : (
                            <>
                                {/* Mute button */}
                                <button
                                    onClick={toggleMute}
                                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110"
                                    style={{
                                        backgroundColor: isMuted ? 'rgba(225, 29, 72, 0.2)' : 'rgba(31, 41, 55, 0.5)',
                                        border: `2px solid ${isMuted ? '#E11D48' : 'rgba(243, 244, 246, 0.1)'}`
                                    }}
                                >
                                    {isMuted ? (
                                        <MicOff className="w-6 h-6" style={{ color: '#E11D48' }} />
                                    ) : (
                                        <Mic className="w-6 h-6" style={{ color: '#22C55E' }} />
                                    )}
                                </button>

                                {/* End call button */}
                                <button
                                    onClick={endCall}
                                    className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
                                    style={{
                                        backgroundColor: primaryColor,
                                        color: '#F3F4F6'
                                    }}
                                >
                                    <PhoneOff className="w-6 h-6" />
                                    Raccrocher
                                </button>
                            </>
                        )}
                    </div>

                    {/* Tips */}
                    <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}>
                        <p className="text-sm flex items-center justify-center gap-2" style={{ color: '#F97316' }}>
                            <Lightbulb className="w-4 h-4" />
                            Astuce : Posez des questions sur le menu, les prix, ou passez une commande de test
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
