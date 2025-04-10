""import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function ProgressTracker() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Progress Tracker</h1>
      <Tabs defaultValue="fitness" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="fitness">Fitness</TabsTrigger>
          <TabsTrigger value="study">Study</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>

        <TabsContent value="fitness">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Fitness Tracker</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block mb-1">Workout Type:</label>
                  <input type="text" placeholder="e.g., Running" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-1">Duration (minutes):</label>
                  <input type="number" placeholder="e.g., 30" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-1">Date:</label>
                  <input type="date" className="w-full p-2 border rounded" />
                </div>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Add Entry</button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="study">
          <Card>
            <CardContent className="p-4">Study tracker coming soon...</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          <Card>
            <CardContent className="p-4">Task tracker coming soon...</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
