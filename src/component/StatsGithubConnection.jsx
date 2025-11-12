import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const [repoCount, setRepoCount] = useState(0);
  const [totalCommits, setTotalCommits] = useState(0);
  const [techCount, setTechCount] = useState(0);



  const username = import.meta.env.VITE_Github_Uername 
  const token = import.meta.env.VITE_Github_Access_Token

  
  useEffect(() => {
    const fetchGitHubStats = async () => {
      const query = `
        {
          user(login: "${username}") {
            repositories(first: 100, privacy: PUBLIC) {
              totalCount
              nodes {
                defaultBranchRef {
                  target {
                    ... on Commit {
                      history {
                        totalCount
                      }
                    }
                  }
                }
                languages(first: 10) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const json = await response.json();

        if (json.errors) {
          console.error("GitHub API error:", json.errors);
          return;
        }

        const repos = json?.data?.user?.repositories?.nodes || [];

        // Total commits calculation with null checks
        const totalCommits = repos.reduce((acc, repo) => {
          return (
            acc +
            (repo?.defaultBranchRef?.target?.history?.totalCount || 0)
          );
        }, 0);

        // Collect unique languages safely
        const languageSet = new Set();
        repos.forEach((repo) => {
          const langs = repo?.languages?.nodes || [];
          langs.forEach((lang) => {
            if (lang?.name) languageSet.add(lang.name);
          });
        });

        setRepoCount(json.data.user.repositories.totalCount);
        setTotalCommits(totalCommits);
        setTechCount(languageSet.size);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };

    fetchGitHubStats();
  }, [token, username]);

  const stats = [
    { num: 1, text: "Years of Experience" },
    { num: repoCount, text: "Project Complete" },
    { num: techCount, text: "Technologies mastered" },
    { num: totalCommits, text: "GitHub commits" },
  ];

  return (
    <div className="my-20 text-center w-full mx-auto">
      <div className="stats w-full bg-white dark:bg-[#030014] text-black dark:text-white stats-vertical lg:stats-horizontal shadow">
        {stats.map((item, index) => (
          <div key={index} className="stat">
            <CountUp
              end={item.num}
              duration={3}
              delay={1}
              className="stat-value text-4xl lg:text-6xl mb-3 text-outline dark:text-transparent"
              suffix="+"
            />
            <div className="stat-title text-black dark:text-white text-lg lg:text-2xl font-extrabold -tracking-wider">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
