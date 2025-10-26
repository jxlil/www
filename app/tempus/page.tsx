import CountdownClock from "@/components/CountdownClock";

export default function ClockPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full flex-col items-center justify-center">
      <CountdownClock
        size={400}
        start={new Date("1996-08-10T00:00:00")}
        target={new Date("2066-08-10T00:00:00")}
        color="#fff"
        font="1em monospace"
      />
      <div className="text-zinc-700 text-center text-xs pt-2 max-w-[250px]">
        <p>non exiguum temporis habemus, sed multum perdidimus</p>
      </div>
    </main>
  );
}

