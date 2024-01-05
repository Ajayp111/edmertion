import React, { useState } from "react";

const Filter = () => {
  const [filters, setFilters] = useState({
    orders: {
      newest: false,
      oldest: false,
    },
    presence: {
      most_active: false,
      least_active: false,
    },
    servicesTaken: {
      courseNetAi: false,
      aspiralGpt: false,
      vidyaGrant: false,
      finastra: false,
    },
  });

  const handleOrderChange = (e) => {
    const { name } = e.target;
    setFilters({
      ...filters,
      orders: {
        ...Object.fromEntries(
          Object.keys(filters.orders).map((key) => [key, key === name])
        ),
      },
    });
  };

  const handlePresenceChange = (e) => {
    const { name } = e.target;
    setFilters({
      ...filters,
      presence: {
        ...Object.fromEntries(
          Object.keys(filters.presence).map((key) => [key, key === name])
        ),
      },
    });
  };

  const handleServiceChange = (e) => {
    const { name } = e.target;
    setFilters({
      ...filters,
      servicesTaken: {
        ...filters.servicesTaken,
        [name]: !filters.servicesTaken[name],
      },
    });
  };

  const resetFilters = () => {
    setFilters({
      orders: {
        newest: false,
        oldest: false,
      },
      presence: {
        most_active: false,
        least_active: false,
      },
      servicesTaken: {
        courseNetAi: false,
        aspiralGpt: false,
        vidyaGrant: false,
        finastra: false,
      },
    });
  };

  return (
    <form action="" className="flex border-t border-gray-200 lg:border-t-0">
      <fieldset className="w-full">
        <legend className="block w-full bg-gray-50 px-5 py-3  text-2xl  font-medium">
          Filters
        </legend>

        <div className="space-y-4 px-5 py-6">
          <div className="flex flex-col">
            <label className="text-xl font-medium mb-1 lg:w-1/4">Orders:</label>
            <div className="space-y-2">
              {Object.entries(filters.orders).map(([key, value]) => (
                <div className="flex items-center py-2" key={key}>
                  <input
                    id={key}
                    type="checkbox"
                    name={key}
                    checked={value}
                    onChange={handleOrderChange}
                    className="h-5 w-5 rounded border-gray-300 text-lg"
                  />
                  <label htmlFor={key} className="ml-3 text-sm font-medium">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xl font-medium mb-1 lg:w-1/4">
              Presence:
            </label>
            <div className="space-y-2">
              {Object.entries(filters.presence).map(([key, value]) => (
                <div className="flex items-center py-2" key={key}>
                  <input
                    id={key}
                    type="checkbox"
                    name={key}
                    checked={value}
                    onChange={handlePresenceChange}
                    className="h-5 w-5 rounded border-gray-300 text-lg"
                  />
                  <label htmlFor={key} className="ml-3 text-sm font-medium">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className=" py-2 text-xl font-medium mb-1">
              Services Taken:
            </label>
            <div className="space-y-2">
              {Object.entries(filters.servicesTaken).map(([key, value]) => (
                <div className="flex items-center py" key={key}>
                  <input
                    id={key}
                    type="checkbox"
                    name={key}
                    checked={value}
                    onChange={handleServiceChange}
                    className="h-5 w-5 rounded border-gray-300 text-lg"
                  />
                  <label htmlFor={key} className="ml-3 text-sm font-medium">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 gap-2">
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs text-gray-500 underline hover:text-gray-700"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default Filter;
