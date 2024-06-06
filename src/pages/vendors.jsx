import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProviderList.css"

const ServiceProviders = () => {
  const { serviceId } = useParams();
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`Fetching providers for service: ${serviceId}`);
    fetch(`/api/providers/${serviceId}`)
      .then((response) => {
        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setProviders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [serviceId]);

  useEffect(() => {
    console.log("Providers state:", providers);
  }, [providers]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="provider-list">
      <h2>Providers for {serviceId}</h2>
      {providers.length > 0 ? (
        <ul>
          {providers.map((provider) => (
            <li key={provider.id} className="provider-card">
              <h3>{provider.name}</h3>
              <p>{provider.description}</p>
              <button className="contact-button">Contact</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No providers available for this service.</p>
      )}
    </div>
  );
};

export default ServiceProviders;
