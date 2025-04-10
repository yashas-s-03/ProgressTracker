import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Fitness from './pages/Fitness';
import Study from './pages/Study';
import Tasks from './pages/Tasks';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 p-4 flex justify-around text-lg">
          <Link to="/" className="hover:text-blue-400">Dashboard</Link>
          <Link to="/fitness" className="hover:text-green-400">Fitness</Link>
          <Link to="/study" className="hover:text-yellow-400">Study</Link>
          <Link to="/tasks" className="hover:text-pink-400">Tasks</Link>
        </nav>

        <Routes>
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/study" element={<Study />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/" element={<div className="text-center p-10 text-xl">Welcome to Progress Tracker!</div>} />
        </Routes>
      </div>
    </Router>
  );
}
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function ProgressTracker() {
  const [fitnessEntries, setFitnessEntries] = useState([]);
  const [studyEntries, setStudyEntries] = useState([]);
  const [taskEntries, setTaskEntries] = useState([]);

  const addFitnessEntry = (event) => {
    event.preventDefault();
    const form = event.target;
    const newEntry = {
      type: form.type.value,
      duration: form.duration.value,
      date: form.date.value
    };
    setFitnessEntries([...fitnessEntries, newEntry]);
    form.reset();
  };

  const addStudyEntry = (event) => {
    event.preventDefault();
    const form = event.target;
    const newEntry = {
      subject: form.subject.value,
      time: form.time.value,
      date: form.date.value
    };
    setStudyEntries([...studyEntries, newEntry]);
    form.reset();
  };

  const addTaskEntry = (event) => {
    event.preventDefault();
    const form = event.target;
    const newEntry = {
      task: form.task.value,
      due: form.due.value
    };
    setTaskEntries([...taskEntries, newEntry]);
    form.reset();
  };

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
              <form className="grid gap-4" onSubmit={addFitnessEntry}>
                <div>
                  <label className="block mb-1">Workout Type:</label>
                  <input name="type" type="text" placeholder="e.g., Running" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-1">Duration (minutes):</label>
                  <input name="duration" type="number" placeholder="e.g., 30" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-1">Date:</label>
                  <input name="date" type="date" className="w-full p-2 border rounded" />
                </div>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Add Entry</button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="study">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Study Tracker</h2>
              <form className="grid gap-4" onSubmit={addStudyEntry}>
                <div>
                  <label className="block mb-1">Subject:</label>
                  <input name="subject" type="text" placeholder="e.g., Math" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-1">Study Time (minutes):</label>
                  <input name="time" type="number" placeholder="e.g., 60" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-1">Date:</label>
                  <input name="date" type="date" className="w-full p-2 border rounded" />
                </div>
                <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Add Entry</button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Task Tracker</h2>
              <form className="grid gap-4" onSubmit={addTaskEntry}>
                <div>
                  <label className="block mb-1">Task Description:</label>
                  <input name="task" type="text" placeholder="e.g., Complete React project" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-1">Due Date:</label>
                  <input name="due" type="date" className="w-full p-2 border rounded" />
                </div>
                <button className="mt-2 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">Add Task</button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
