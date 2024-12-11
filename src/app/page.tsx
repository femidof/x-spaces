import { Button } from "@/components/ui/button";
import { login } from "@/lib/actions";
import { X } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white mb-8">
          Twitter Spaces Explorer
        </h1>
        <p className="text-gray-300 text-lg">
          Discover live conversations happening right now on X.
        </p>
        <form
          className="flex justify-center"
          action={async () => {
            "use server";
            await login();
          }}
        >
          <Button
            type="submit"
            variant={"default"}
            className=" px-6 py-5 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-700"
          >
            <X className="w-5 h-5" />
            <span>Sign in with X (Formerly Twitter)</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
