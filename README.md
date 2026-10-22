# Vite RSC Server Module HMR Reproduction

This app loads a server component through `import.meta.glob` and passes its rendered output to a client component. An edit to the server component can leave the browser with stale output.

## Run

1. Run `npm install`.
2. Run `npm run dev`.
3. Open `http://localhost:3003/`.
4. Change `Workflow component before` in `app/workflow-components/demo/component.tsx` to `Workflow component after`.

Before the Vite RSC fix, the browser keeps the old text until a full page reload.

## Module shape

The route layout loads the workflow component from a glob. It renders that server component as a child of a client component.