---
name: browser-debug
description: Debug frontend applications, test API responses in browser, verify UI behavior, and troubleshoot web-related issues. Use proactively when debugging any browser-related work including frontend bugs, API integration issues, UI rendering problems, or when verifying that changes work correctly in the browser.
---

# Browser Debugging Workflow

Use `agent-browser` to debug and verify frontend/API work in the browser.

## When to use this

- Debugging frontend issues (layout, interactions, state)
- Verifying API responses render correctly
- Testing form submissions and validation
- Checking console errors or network requests
- Verifying a fix works before committing
- Reproducing user-reported bugs
- Testing authentication flows

## Authentication handling

**IMPORTANT:** If the application requires login:
1. Ask the user in chat: "The app requires authentication. Please provide the login credentials (username/password) to proceed."
2. Wait for the user to provide credentials in the chat
3. Never assume or guess credentials
4. Use `--headed` mode so the user can see what's happening during login

## Debugging workflow

### 1. Start with headed mode for debugging
```bash
agent-browser open http://localhost:3000 --headed
```

### 2. Get page state
```bash
agent-browser snapshot -i          # Interactive elements
agent-browser get title            # Page title
agent-browser get url              # Current URL
```

### 3. Check for errors
```bash
agent-browser console              # Console messages
agent-browser errors               # JavaScript errors
```

### 4. Interact and test
```bash
agent-browser snapshot -i          # Get refs
agent-browser click @e1            # Click element
agent-browser fill @e2 "test"      # Fill input
agent-browser wait --load networkidle
```

### 5. Take screenshots for evidence
```bash
agent-browser screenshot debug.png
agent-browser screenshot --full full-page.png
```

## Common debugging scenarios

### Debug API response rendering
```bash
agent-browser open http://localhost:3000/page --headed
agent-browser wait --load networkidle
agent-browser snapshot -i
agent-browser console              # Check for fetch errors
```

### Debug form submission
```bash
agent-browser open http://localhost:3000/form --headed
agent-browser snapshot -i
agent-browser fill @e1 "test@example.com"
agent-browser click @e2            # Submit button
agent-browser wait --load networkidle
agent-browser console              # Check for errors
agent-browser snapshot -i          # Check result state
```

### Debug with authentication
```bash
# First, ask user for credentials in chat!
agent-browser open http://localhost:3000/login --headed
agent-browser snapshot -i
agent-browser fill @e1 "USER_PROVIDED_USERNAME"
agent-browser fill @e2 "USER_PROVIDED_PASSWORD"
agent-browser click @e3            # Login button
agent-browser wait --url "**/dashboard"
agent-browser state save .debug-auth.json   # Save for reuse in session
```

### Reuse auth in same debug session
```bash
agent-browser state load .debug-auth.json
agent-browser open http://localhost:3000/protected-page --headed
```

### Debug network requests
```bash
agent-browser open http://localhost:3000 --headed
agent-browser network requests     # View tracked requests
```

## Tips

- Always use `--headed` when debugging so you can see what's happening
- Run `agent-browser console` after interactions to catch errors
- Use `agent-browser snapshot -i` frequently to see current page state
- Save auth state to avoid re-logging in during debug session
- Take screenshots before/after to document issues
- Clean up: `agent-browser close` when done debugging