<TabsContent value="study">
  <Card>
    <CardContent className="p-4">
      <h2 className="text-xl font-semibold mb-4">Study Tracker</h2>
      <div className="grid gap-4">
        <div>
          <label className="block mb-1">Subject:</label>
          <input type="text" placeholder="e.g., Math" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Study Time (minutes):</label>
          <input type="number" placeholder="e.g., 60" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Date:</label>
          <input type="date" className="w-full p-2 border rounded" />
        </div>
        <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Add Entry</button>
      </div>
    </CardContent>
  </Card>
</TabsContent>
