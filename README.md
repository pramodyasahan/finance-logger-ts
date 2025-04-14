
---
# 💰 TypeScript Invoice & Payment Logger

A simple and interactive web application built with **TypeScript** that allows users to create and manage invoices and payments. It uses **object-oriented programming**, **interfaces**, and direct DOM manipulation to dynamically render formatted financial records to the page.

---

## 🎯 Features

- Add **invoices** (who owes what for what)
- Add **payments** (who is owed for what)
- Auto-format using a shared interface (`HasFormatter`)
- Dynamically render items into an HTML `<ul>` list
- Clean and extensible OOP structure using:
  - Classes (`Invoice`, `Payment`, `ListTemplates`)
  - Interface (`HasFormatter`)
  - Constructor injection & private access modifiers

---

## 🛠️ Technologies Used

- **TypeScript** – Static typing and OOP support
- **HTML + DOM API** – UI and user input form
- **Modular Code Structure** – Organized with ES Modules (`import/export`)

---

## 📂 Project Structure

```bash
.
├── index.html                # Form & list structure
├── src/
│   ├── app.ts              # App logic (form handling, DOM events)
│   ├── models/
│   │   ├── Invoice.ts
│   │   ├── Payment.ts
│   │   └── ListTemplates.ts
│   └── interfaces/
│       └── HasFormatter.ts
├── dist/                    # Compiled JS output (after build)
├── tsconfig.json            # TypeScript configuration
├── README.md                # Project documentation
```

---

## 🧩 Key Concepts

### `HasFormatter` Interface
Defines a common structure that both `Invoice` and `Payment` classes implement to ensure a consistent `.format()` method is available for rendering.

### `Invoice` and `Payment` Classes
Each class contains relevant financial data and implements `HasFormatter` for polymorphic behavior.

### `ListTemplates` Class
Encapsulates rendering logic. Uses the `render()` method to add entries to the DOM `<ul>` element, dynamically positioning them at the start or end.

---

## 🚀 How to Run

1. **Clone this repository**
```bash
git clone https://github.com/pramodyasahan/finance-logger-ts.git
cd finance-logger-ts
```

2. **Install TypeScript (if not already globally installed)**
```bash
npm install -g typescript
```

3. **Compile TypeScript**
```bash
tsc       # uses tsconfig.json
```

4. **Open `index.html` in your browser**

---

## 📌 Possible Extensions

- Add delete/edit functionality
- Persist data using `localStorage` or `IndexedDB`
- Add category filters (e.g., services, products)
- Improve UI with CSS frameworks (e.g., Tailwind, Bootstrap)
- Port to React + TypeScript for component-based design

---

## 🧠 Learning Outcomes

- Mastering interfaces and classes in TypeScript
- Practical DOM manipulation with strict typing
- Understanding access modifiers (`private`, `public`)
- Structuring code with ES Modules

---

## 📜 License

MIT License — feel free to use, modify, and share this code.

---

## 👨‍💻 Author

Made with ❤️ by [Pramodya Sahan](https://github.com/pramodyasahan)
```

---

Let me know if you’d like to add live hosting instructions (e.g., GitHub Pages or Vite), or convert it into a React or Next.js version!