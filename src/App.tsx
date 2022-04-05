import { useCallback, useMemo, useRef, useState } from "react";

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users] = useState<[User]>();

  const names = useMemo(
    () => users?.map((user) => user.name).join(", "),
    [users]
  );

  const greeting = useCallback(() => alert(`Hello ${names}`), [names]);

  inputRef.current?.focus({
    preventScroll: true,
  });

  return (
    <div>
      {names}
      <form action="">
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
};

export default App;
