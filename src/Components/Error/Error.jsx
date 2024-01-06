import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
const error = useRouteError();
console.error(error);

return (
    <div id="error-page">
        <h1>Ooops!</h1>
        <h2>404 Not found!</h2>
        <p>Sorry, an unexpected error occurred.</p>
        <p>
            <li>{error.ststusText || error.massage}</li>
        </p>
    </div>
);
}