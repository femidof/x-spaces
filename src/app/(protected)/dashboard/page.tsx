import { auth } from "@/auth";
import { Space } from "@/components/space";
import { SpacesGrid } from "@/components/space-grid";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { logout } from "@/lib/actions";
import Image from "next/image";

import { redirect } from "next/navigation";

export const Dashboard = async () => {
  const session = await auth();
  //   console.log(session);
  if (!session) {
    redirect("/");
  }
  // console.log("SESSION:::", session);
  return (
    <div>
      Dashboard
      <Space />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Image
              src={session.user.image!}
              alt={session.user.name!}
              className="w-12 h-12 rounded-full"
              width={48}
              height={48}
            />
            <div>
              <h2 className="font-bold text-xl">{session.user.name}</h2>
              {/* <p className="text-gray-500">@{session.user.username}</p> */}
            </div>
          </div>
          <form
            action={async () => {
              "use server";
              await logout();
            }}
          >
            <Button type="submit" variant="outline">
              Sign out
            </Button>
          </form>
        </div>

        {/* {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <p className="text-red-700">{error}</p>
          </div>
        )} */}

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Spaces</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
            <TabsTrigger value="joined">Joined</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <SpacesGrid
              //   spaces={allSpaces}
              spaces={[]}
              title="All Twitter Spaces"
              loading={false}
            />
          </TabsContent>

          {/* <TabsContent value="following">
            <SpacesGrid
              spaces={followingSpaces}
              title="Spaces from People You Follow"
              loading={loading}
            />
          </TabsContent> */}

          {/* <TabsContent value="joined">
            <SpacesGrid
              spaces={joinedSpaces}
              title="Spaces You've Joined"
              loading={loading}
            />
          </TabsContent> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
