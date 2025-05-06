import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, TrashIcon } from "lucide-react";
import "./App.css";

interface DataType {
  id: number;
  title: string;
  content: string;
}
interface FormData {
  title: string;
  content: string;
}

function App() {
  const [tasks, settasks] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>({ title: "", content: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.title || !form.content) {
      alert("All fields are required.");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const json = await response.json();
      settasks((prev) => [...prev, json]);
    } catch (e) {
       if (e instanceof Error) {
         setError(e.message);
       } else {
         setError("An unexpected error occurred.");
       }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      await response.json();
      settasks(tasks.filter((item)=>item.id !== id));
    } catch (e) {
       if (e instanceof Error) {
         setError(e.message);
       } else {
         setError("An unexpected error occurred.");
       }
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/tasks");
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${
            errorText || response.statusText
          }`
        );
      }
      const json = await response.json();
      settasks(json);
    } catch (e) {
       if (e instanceof Error) {
         setError(e.message);
       } else {
         setError("An unexpected error occurred.");
       }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-row items-start justify-between gap-6 p-6 bg-gray-50">
      <section className="w-full max-w-md space-y-2">
        <h1 className="text-3xl font-bold">📝 Task Manager</h1>

        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter title"
              />
              <Input
                name="content"
                value={form.content}
                onChange={handleChange}
                placeholder="Enter content"
              />
              <Button type="submit" className="w-full cursor-pointer" disabled={loading}>
                {loading ? (
                  <Loader2 className="animate-spin h-4 w-4" />
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Button variant="outline" className="cursor-pointer" onClick={fetchData} disabled={loading}>
          {loading ? (
            <Loader2 className="animate-spin h-4 w-4" />
          ) : (
            "Fetch Tasks"
          )}
        </Button>

        {error && <p className="text-red-500">Error: {error}</p>}
      </section>

      <section className="w-full max-w-md space-y-2 h-[400px] overflow-y-scroll">
        {tasks.map((item) => (
          <Card key={item.id} className="bg-white shadow-md">
            <CardContent className="p-4">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-gray-600">{item.content}</p>
              <button onClick={() => handleDelete(item.id)}>
                <TrashIcon className="cursor-pointer" />
              </button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}

export default App;
