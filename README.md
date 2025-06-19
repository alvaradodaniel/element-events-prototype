This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses React and Tailwind.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a practice using a dogs API and a search functionality.

https://github.com/user-attachments/assets/ad4fa927-c40d-428f-b576-12cb19f2ba05

### Form Elements and Events

| Element       | Event            | Description                                                           |
| ------------- | ---------------- | --------------------------------------------------------------------- |
| Text Field    | onChange         | Updates the `text` state as the user types.                           |
| Dropdown      | onChange         | Updates the `dropdown` state when a new option is selected.           |
| Checkbox      | onChange         | Updates the `checked` state when toggled.                             |
| Radio Button  | onChange         | Updates the `radio` state when a radio option is selected.            |
| Submit Button | onClick/onSubmit | Triggers form submission, prevents default, and displays form values. |
