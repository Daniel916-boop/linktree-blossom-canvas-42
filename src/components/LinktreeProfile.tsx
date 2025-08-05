import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import floralBackground from "@/assets/floral-background.jpg";
// import profilePhoto from "@/assets/profile-photo.png";
// import privacyLogo from "@/assets/privacy-logo.png";
// import tiktokLogo from "@/assets/tiktok-logo.png";

interface LinkItem {
  title: string;
  url: string;
}

const LinktreeProfile = () => {
  const profileName = "Milena Feffers";
  
  const links: LinkItem[] = [
    {
      title: "Privacy",
      url: "https://permissao-de-acesso.netlify.app/"
    },
    {
      title: "TikTok", 
      url: "https://naotemsite.com"
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="min-h-screen w-full bg-orange-soft relative"
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-orange-soft/40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Profile Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-white/20 shadow-lg">
            <AvatarImage src="" alt={profileName} />
            <AvatarFallback className="text-2xl font-bold text-orange-dark bg-glass">
              {profileName.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
            {profileName}
          </h1>
          <div className="w-24 h-1 bg-foreground/30 mx-auto rounded-full"></div>
        </div>

        {/* Tabs Container */}
        <div className="w-full max-w-md animate-fade-in">
          <Tabs defaultValue="privacy" className="w-full">
            <TabsList className="w-full bg-orange-dark border border-white/20 backdrop-blur-sm">
              <TabsTrigger 
                value="privacy" 
                className="flex-1 text-white bg-orange-dark data-[state=active]:bg-white data-[state=active]:text-orange-dark"
              >
                <span className="w-5 h-5 mr-2 bg-white/20 rounded"></span>
                Privacy
              </TabsTrigger>
              <TabsTrigger 
                value="tiktok"
                className="flex-1 text-white bg-orange-dark data-[state=active]:bg-white data-[state=active]:text-orange-dark"
              >
                <span className="w-5 h-5 mr-2 bg-white/20 rounded"></span>
                TikTok
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="privacy" className="mt-4">
              <Button
                variant="linktree"
                size="lg"
                className="w-full h-14 text-lg font-semibold shadow-lg"
                onClick={() => handleLinkClick(links[0].url)}
              >
                <span className="w-6 h-6 mr-3 bg-orange-dark/20 rounded"></span>
                {links[0].title}
              </Button>
            </TabsContent>
            
            <TabsContent value="tiktok" className="mt-4">
              <Button
                variant="linktree"
                size="lg"
                className="w-full h-14 text-lg font-semibold shadow-lg"
                onClick={() => handleLinkClick(links[1].url)}
              >
                <span className="w-6 h-6 mr-3 bg-orange-dark/20 rounded"></span>
                {links[1].title}
              </Button>
            </TabsContent>
          </Tabs>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 opacity-50">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinktreeProfile;