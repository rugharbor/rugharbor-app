import ReactGA from 'react-ga4';

ReactGA.initialize('G-S81CPM7S3X');

function ga() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return(
        <div>

        </div>
    )
}

export const ga = {
  areaId: "header",
  sortOrder: 1,
};
