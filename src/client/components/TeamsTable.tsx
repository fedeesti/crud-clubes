import React, { ReactElement } from 'react';
import { useFetchTeams } from '../hooks/useFetchTeams';

export function TeamsTable(): JSX.Element {
  const { teams } = useFetchTeams();
  return (
    <section className="overflow-x-auto sm:rounded-lg flex items-center justify-center mb-4">
      <table className="w-3/5 max-w-2xl mb-4 text-sm text-left" id="teams-table">
        <thead className="text-sm uppercase text-white bg-body-linear-first" id="thead-">
          <tr>
            <th scope="col" className="py-3 px-6 text-left">
              Team name
            </th>
            <th scope="col" className="py-3 px-6 text-center md:text-left">
              Country
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr
              key={team.id}
              className="bg-emerald-light border-b even:bg-emerald-dark hover:bg-emerald-100"
              id="team-row"
            >
              <th scope="row" className="py-4 px-6 font-medium text-gray-900">
                {team.name}
              </th>
              <td className="py-4 px-6">{team.area.name}</td>
              <td className="py-4 px-6 text-center" id="team-actions">
                <a href="#" className="font-medium text-blue-600 ml-1 hover:text-blue-400">
                  Watch
                </a>
                ,
                <a href="#" className="font-medium text-blue-600 ml-1 hover:text-blue-400">
                  Edit
                </a>
                ,
                <a href="#" className="font-medium text-blue-600 ml-1 hover:text-red-600">
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
