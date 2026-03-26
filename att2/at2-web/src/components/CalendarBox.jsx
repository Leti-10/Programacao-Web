export default function CalendarBox({ tasks = [] }) {

  const days = [
    "S", "T", "Q", "Q", "S", "S", "D",
  ];

  const numbers = Array.from({ length: 31 }, (_, i) => i + 1);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  return (
    <div className="card">

      <h2>
        Weekly Planner
      </h2>

      <div className="calendar-grid">
        {days.map((d, i) => (
          <div
            key={i}
            className="day"
            style={{
              fontWeight: "bold",
              background: "#dfe8ff",
            }}
          >
            {d}
          </div>
        ))}
        {numbers.map((n) => {

          const dateString =
            `${year}-${String(month).padStart(2, "0")}-${String(n).padStart(2, "0")}`;

          const dayTasks = tasks.filter(
            (task) => task.date === dateString
          );

          return (
            <div
              key={n}
              className="day"
            >

              <div>
                {n}
              </div>

              {dayTasks.map((task) => (
                <div
                  key={task.id}
                  style={{
                    fontSize: "10px",
                    background: "#cfe2ff",
                    marginTop: "2px",
                    borderRadius: "6px",
                    padding: "2px",
                  }}
                >
                  {task.name}
                </div>
              ))}

            </div>
          );
        })}

      </div>

    </div>
  );
}
