/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GnBE0aJL6ET
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div className="p-6 sm:p-10 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Weekly Timetable</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Time</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Monday</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Tuesday</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Wednesday</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Thursday</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Friday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border-b">8:00 AM - 9:00 AM</td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-primary text-primary-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Computer Science
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 font-medium">
                      Calculus I
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-primary text-primary-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Computer Science
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 font-medium">
                      Calculus I
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-primary text-primary-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Computer Science
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">9:15 AM - 10:15 AM</td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 font-medium">
                      Calculus I
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-muted text-muted-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Psychology
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 font-medium">
                      Calculus I
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-muted text-muted-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Psychology
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 font-medium">
                      Calculus I
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">10:30 AM - 11:30 AM</td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-muted text-muted-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Psychology
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-primary text-primary-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Computer Science
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-muted text-muted-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Psychology
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-primary text-primary-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Computer Science
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-muted text-muted-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Psychology
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">1:00 PM - 2:00 PM</td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 font-medium">
                      Calculus I
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-muted text-muted-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Psychology
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 font-medium">
                      Calculus I
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-muted text-muted-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Psychology
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 font-medium">
                      Calculus I
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">2:15 PM - 3:15 PM</td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-primary text-primary-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Computer Science
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 font-medium">
                      Calculus I
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-primary text-primary-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Computer Science
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 font-medium">
                      Calculus I
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="bg-primary text-primary-foreground rounded-md px-3 py-1 font-medium">
                      Introduction to Computer Science
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }