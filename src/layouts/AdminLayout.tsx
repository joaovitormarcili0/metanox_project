import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Lock, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Static MVP Auth
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl font-bold">Acesso Restrito</h1>
            <p className="text-muted-foreground mt-2">Área administrativa Metanox</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-destructive/10 text-destructive p-3 rounded-lg flex items-center gap-2 text-sm">
                <ShieldAlert size={16} />
                <span>Credenciais inválidas. Tente novamente.</span>
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium">Usuário</label>
              <Input 
                type="text" 
                placeholder="admin" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Senha</label>
              <Input 
                type="password" 
                placeholder="••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full h-12 text-base mt-2">
              Entrar no Painel
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // Se estiver autenticado, renderiza as rotas filhas (AdminDashboard)
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
              <ShieldAlert size={20} />
            </div>
            <span className="font-bold text-lg">Metanox Admin</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setIsAuthenticated(false)}>
            Sair
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
