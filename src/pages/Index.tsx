import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);

  const matches = [
    { id: 1, team1: 'Thunder Kings', team2: 'Phoenix Flames', score1: 94, score2: 89, time: 'Final', date: 'Oct 15, 2025' },
    { id: 2, team1: 'Storm Warriors', team2: 'Eagle Knights', score1: 78, score2: 82, time: 'Q3 - 4:32', date: 'Oct 16, 2025', live: true },
    { id: 3, team1: 'Lightning Bolts', team2: 'Glacier Bears', score1: 0, score2: 0, time: '18:00', date: 'Oct 17, 2025', upcoming: true },
  ];

  const standings = [
    { rank: 1, team: 'Thunder Kings', wins: 12, losses: 3, pct: 0.800 },
    { rank: 2, team: 'Eagle Knights', wins: 11, losses: 4, pct: 0.733 },
    { rank: 3, team: 'Phoenix Flames', wins: 9, losses: 6, pct: 0.600 },
    { rank: 4, team: 'Storm Warriors', wins: 8, losses: 7, pct: 0.533 },
    { rank: 5, team: 'Lightning Bolts', wins: 6, losses: 9, pct: 0.400 },
    { rank: 6, team: 'Glacier Bears', wins: 4, losses: 11, pct: 0.267 },
  ];

  const news = [
    {
      id: 1,
      title: 'Thunder Kings Dominate in Championship Qualifier',
      excerpt: 'The Thunder Kings secured their spot in the finals with a commanding 94-89 victory...',
      date: 'Oct 15, 2025',
      image: 'https://v3b.fal.media/files/b/tiger/3ipUkXgUZgXlXo-VJgcs8_output.png'
    },
    {
      id: 2,
      title: 'New Season Registration Opens Next Week',
      excerpt: 'Registration for the 2026 Spring Season will open on October 20th. Teams are encouraged...',
      date: 'Oct 14, 2025',
      image: 'https://v3b.fal.media/files/b/tiger/3ipUkXgUZgXlXo-VJgcs8_output.png'
    },
  ];

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения регистрации.',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Icon name="Trophy" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">INTERCONTINENTAL BASKETBALL LEAGUE</h1>
                <p className="text-sm text-muted-foreground">League of Cups Inc. • EIN 36-5149730</p>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Bell" size={18} className="mr-2" />
              Подписаться
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary p-8 text-white">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-2">🏀 Сезон 2025-2026</h2>
              <p className="text-xl opacity-90">Следите за матчами в реальном времени</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="matches" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1">
            <TabsTrigger value="matches" className="flex items-center gap-2 py-3">
              <Icon name="Activity" size={18} />
              <span className="hidden sm:inline">Матчи</span>
            </TabsTrigger>
            <TabsTrigger value="standings" className="flex items-center gap-2 py-3">
              <Icon name="BarChart3" size={18} />
              <span className="hidden sm:inline">Таблица</span>
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-2 py-3">
              <Icon name="Newspaper" size={18} />
              <span className="hidden sm:inline">Новости</span>
            </TabsTrigger>
            <TabsTrigger value="register" className="flex items-center gap-2 py-3">
              <Icon name="UserPlus" size={18} />
              <span className="hidden sm:inline">Регистрация</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="matches" className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Расписание матчей</h2>
              <Button variant="outline" size="sm">
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтр
              </Button>
            </div>

            <div className="grid gap-4">
              {matches.map((match, index) => (
                <Card 
                  key={match.id} 
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in border-l-4 border-l-primary"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedMatch(match.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                              {match.team1.charAt(0)}
                            </div>
                            <span className="font-semibold text-lg">{match.team1}</span>
                          </div>
                          <div className="text-center mx-6">
                            {match.live ? (
                              <Badge className="bg-red-500 animate-pulse mb-2">LIVE</Badge>
                            ) : match.upcoming ? (
                              <Badge variant="outline" className="mb-2">Скоро</Badge>
                            ) : (
                              <Badge variant="secondary" className="mb-2">Завершен</Badge>
                            )}
                            <div className="text-3xl font-bold">
                              {match.score1} - {match.score2}
                            </div>
                            <div className="text-sm text-muted-foreground">{match.time}</div>
                          </div>
                          <div className="flex items-center gap-3 flex-1 justify-end">
                            <span className="font-semibold text-lg">{match.team2}</span>
                            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold">
                              {match.team2.charAt(0)}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground text-center">{match.date}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="standings" className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Турнирная таблица</h2>
              <Button variant="outline" size="sm">
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-bold">Место</th>
                        <th className="text-left p-4 font-bold">Команда</th>
                        <th className="text-center p-4 font-bold">Побед</th>
                        <th className="text-center p-4 font-bold">Поражений</th>
                        <th className="text-center p-4 font-bold">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      {standings.map((team, index) => (
                        <tr 
                          key={team.rank} 
                          className="border-t hover:bg-muted/30 transition-colors animate-fade-in"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              {team.rank <= 3 && (
                                <Icon 
                                  name="Medal" 
                                  size={20} 
                                  className={team.rank === 1 ? 'text-accent' : team.rank === 2 ? 'text-gray-400' : 'text-orange-600'} 
                                />
                              )}
                              <span className="font-semibold text-lg">{team.rank}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {team.team.charAt(0)}
                              </div>
                              <span className="font-semibold">{team.team}</span>
                            </div>
                          </td>
                          <td className="p-4 text-center font-bold text-green-600">{team.wins}</td>
                          <td className="p-4 text-center font-bold text-red-600">{team.losses}</td>
                          <td className="p-4 text-center font-bold">{(team.pct * 100).toFixed(1)}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="news" className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Новости и анонсы</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {news.map((article, index) => (
                <Card 
                  key={article.id} 
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="Calendar" size={14} />
                      {article.date}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 h-auto">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Bell" className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle>Подпишитесь на обновления</CardTitle>
                    <CardDescription>Получайте уведомления о матчах и новостях лиги</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder="Ваш email" className="bg-white" />
                  <Button className="bg-primary hover:bg-primary/90">Подписаться</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-2">Регистрация команды</h2>
              <p className="text-muted-foreground mb-6">Заполните форму для участия в следующем сезоне</p>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleRegistration} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="teamName">Название команды *</Label>
                      <Input id="teamName" placeholder="Введите название команды" required />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="captainName">Капитан команды *</Label>
                        <Input id="captainName" placeholder="ФИО капитана" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="team@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="players">Количество игроков</Label>
                      <Input id="players" type="number" min="8" max="15" placeholder="Минимум 8 игроков" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Опыт команды</Label>
                      <Textarea 
                        id="experience" 
                        placeholder="Расскажите о достижениях и опыте вашей команды"
                        rows={4}
                      />
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                      <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить заявку
                      </Button>
                      <Button type="button" variant="outline" className="flex-1">
                        Очистить
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="Info" size={20} />
                    Требования к участию
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-0.5" />
                      <span>Минимум 8 игроков в основном составе</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-0.5" />
                      <span>Все игроки должны быть старше 18 лет</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-0.5" />
                      <span>Регистрационный взнос: $500 за сезон</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-0.5" />
                      <span>Наличие собственной формы обязательно</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t bg-secondary text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">О лиге</h3>
              <p className="text-sm text-white/80">
                Intercontinental Basketball League of Cups Inc. - профессиональная баскетбольная лига с международным участием.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@iblcups.com
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +1 (800) 123-4567
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Соцсети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="text-white hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-primary">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Документы</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p>EIN: 36-5149730</p>
                <p>© 2025 IBL Cups Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
