
import React from 'react';
import { Settings, Heart, MapPin, Calendar, Badge as BadgeIcon, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import MobileLayout from '@/components/layout/MobileLayout';

const ProfilePage = () => {
  // Mock user data
  const user = {
    name: "Alex Johnson",
    username: "alexjourneys",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Travel enthusiast. Explorer. Food lover. Always looking for new adventures around the world.",
    location: "New York, USA",
    tripCount: 24,
    followers: 843,
    following: 267
  };
  
  const profileMenuItems = [
    { icon: Heart, label: "Saved Places", count: 16 },
    { icon: MapPin, label: "My Trips", count: 8 },
    { icon: Calendar, label: "Trip Plans", count: 3 },
    { icon: BadgeIcon, label: "Achievements", count: 12 }
  ];
  
  return (
    <MobileLayout>
      <div className="px-4 py-6 pb-24 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Profile</h1>
          <Button variant="ghost" size="icon">
            <Settings size={20} />
          </Button>
        </div>
        
        <div className="flex flex-col items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          
          <div className="mt-4 text-center">
            <h2 className="font-bold text-xl">{user.name}</h2>
            <p className="text-muted-foreground">@{user.username}</p>
          </div>
          
          <Badge className="mt-3 bg-primary/10 text-primary hover:bg-primary/20">
            <MapPin size={14} className="mr-1" />
            {user.location}
          </Badge>
          
          <p className="text-center mt-4 text-sm text-muted-foreground max-w-xs">
            {user.bio}
          </p>
        </div>
        
        <div className="flex justify-around text-center">
          <div>
            <p className="font-bold text-xl">{user.tripCount}</p>
            <p className="text-xs text-muted-foreground">Trips</p>
          </div>
          <div>
            <p className="font-bold text-xl">{user.followers}</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          <div>
            <p className="font-bold text-xl">{user.following}</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          {profileMenuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Button 
                key={index}
                variant="ghost" 
                className="w-full justify-between"
              >
                <div className="flex items-center">
                  <IconComponent size={18} className="mr-2 text-primary" />
                  {item.label}
                </div>
                <Badge variant="outline">{item.count}</Badge>
              </Button>
            );
          })}
        </div>
        
        <Separator />
        
        <Button variant="outline" className="w-full">
          <LogOut size={18} className="mr-2 text-destructive" />
          Sign Out
        </Button>
      </div>
    </MobileLayout>
  );
};

export default ProfilePage;
