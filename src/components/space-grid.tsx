"use client";

import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

interface Space {
  id: string;
  title: string;
  host_ids: string[];
  created_at: string;
  started_at: string;
  participant_count: number;
}

interface SpacesGridProps {
  spaces: Space[];
  title: string;
  loading?: boolean;
}

export function SpacesGrid({
  spaces,
  title,
  loading = false,
}: SpacesGridProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4 space-y-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/4" />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (spaces.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Card className="p-8 text-center text-gray-500">No spaces found</Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {spaces.map((space) => (
          <Card key={space.id} className="p-4">
            <h3 className="font-semibold mb-2">{space.title}</h3>
            <div className="text-sm text-gray-500">
              <p>
                Started {formatDistanceToNow(new Date(space.started_at))} ago
              </p>
              <p>{space.participant_count} participants</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
