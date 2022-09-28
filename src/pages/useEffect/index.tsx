import { useEffect, useState } from "react";

enum ResourceType {
  POSTS = "posts",
  USERS = "users",
  COMMENTS = "comments",
}

function UseEffect() {
  const [resouceType, setResourceType] = useState<string>("");
  const [items, setItems] = useState<any[]>([]);

  // Initialize the state while page loaded
  useEffect(() => {
    setResourceType(ResourceType.POSTS);
  }, []);

  // Ask new request while resourceType change
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resouceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resouceType]);

  return (
    <>
      <h1 className="text-4xl">Basic usage of useEffect</h1>
      <div className="flex gap-2">
        <button
          className="btn"
          onClick={() => setResourceType(ResourceType.POSTS)}
        >
          {ResourceType.POSTS}
        </button>
        <button
          className="btn"
          onClick={() => setResourceType(ResourceType.USERS)}
        >
          {ResourceType.USERS}
        </button>
        <button
          className="btn"
          onClick={() => setResourceType(ResourceType.COMMENTS)}
        >
          {ResourceType.COMMENTS}
        </button>
      </div>
      <h1 className="text-2xl">{resouceType}</h1>
      {items.map((item, idx) => (
        <pre className="whitespace-nowrap my-2" key={idx}>
          {JSON.stringify(item)}
        </pre>
      ))}
    </>
  );
}

export default UseEffect;
