import axios from "axios";
import { useState, useEffect } from "react";
import { User, LinkedinLogo, GithubLogo, At, IdentificationCard } from "@phosphor-icons/react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/members';

    axios
      .get(apiUrl)
      .then((response) => {
        console.log('Fetched Data:', response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="bg-black ">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-3 lg:px-3 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl pb-16">
            Members List
          </h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {data.map((member, index) => (
                <div key={index}>
                  <div className="mb-8 sm:break-inside-avoid">
                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                      <div className="flex items-center gap-4">
                        <div>
                          <h3 className="flex items-center align-middle gap-2 text-large font-semibold"><User/> {member.full_name}</h3>
                          
                          <div className="p-3">
                            <p className="text-sm">Nicknames: {member.nicknames}</p>
                            <p className="flex items-center text-sm gap-1"><IdentificationCard/>{member.id}</p>
                            <p className="flex items-center text-sm gap-1"><LinkedinLogo/> <a href={member.linkedin}>Connect with Me</a></p>
                            <p className="flex items-center text-sm gap-1"><GithubLogo/> <a href={member.github}>Follow Me on GitHub</a></p>
                            <p className="flex items-center text-sm gap-1"><At/> <a href={`mailto:${member.email}`}>Email Me</a></p>
                          </div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
