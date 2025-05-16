//name,age,email,password, isLoading

import { useReducer } from "react";

interface InitialState {
  name: string;
  email: string;
  password: string;
}

enum ActionType {
  SUBMIT = "submit",
  CHANGE = "change",
}

type Action =
  | { type: ActionType.SUBMIT }
  | { type: ActionType.CHANGE; payload: object };

function reducer(state: InitialState, action: Action) {
  switch (action.type) {
    case ActionType.SUBMIT:
      return { ...state };
    case ActionType.CHANGE:
      return { ...state, ...action.payload };
  }
}

const UseReducerWithTS: React.FC = () => {
  const initialState: InitialState = {
    name: "",
    email: "",
    password: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: ActionType.CHANGE,
      payload: { [e.target.name]: e.target.value },
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <main className="p-4 max-w-md mx-auto">
        <h2 className="text-2xl font-semibold">App with useReducer and typescript</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};
export default UseReducerWithTS;
