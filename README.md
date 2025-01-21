# Mana

**Mana** Mana is a lightweight and flexible HTTP request library for JavaScript/TypeScript applications. Easily configurable, 100% typed, and supports interceptors for requests and responses. All built by extending the Request interface for greater security and predictability.

## Features

- Customizable HTTP request methods (GET, POST, PUT, PATCH, DELETE).
- Request and response interceptors.
- Supports both client-side (browser) and server-side (Node.js) usage.

## Installation

To install the library, run:

```bash
npm install @okubo/mana
```
or
```bash
pnpm install @okubo/mana
```

## API Methods

### GET

```typescript

const getResource = async () => {
  try {
    const res = await get<YourType>("your-request-url");
  } catch (error) {
    console.error(error);
  }
};

```

### POST 

```typescript

const getResource = async () => {
  try {
    const res = await post<YourType>("your-request-url", {
        body: {
            for: 'bar'
        }
    });
  } catch (error) {
    console.error(error);
  }
};

```

### PATCH 

```typescript

const getResource = async () => {
  try {
    const res = await patch<YourType>("your-request-url/id", {
        body: {
            for: 'bar'
        }
    });
  } catch (error) {
    console.error(error);
  }
};

```

### PUT 

```typescript

const getResource = async () => {
  try {
    const res = await put<YourType>("your-request-url/id", {
        body: {
            for: 'bar'
        }
    });
  } catch (error) {
    console.error(error);
  }
};

```

### DELETE 

```typescript

const getResource = async () => {
  try {
    const res = await _delete<YourType>("your-request-url/id");
  } catch (error) {
    console.error(error);
  }
};

```