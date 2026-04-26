const LISTINGS_URL = `${import.meta.env.BASE_URL}data.json`;

export async function getListings() {
  const response = await fetch(LISTINGS_URL);

  if (!response.ok) {
    throw new Error('Impossible de charger les annonces.');
  }

  return response.json();
}

export async function getListingById(id) {
  const listings = await getListings();
  return listings.find((listing) => listing.id === id) ?? null;
}
