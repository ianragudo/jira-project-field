# Introduction

Jira is a valuable tool for agile project management, allowing teams to streamline workflows, track issues, and collaborate effectively. Jira administrators are responsible for configuring and maintaining the platform to meet their organization's specific needs. However, as demand for customized solutions grows, administrators may seek ways to enhance Jira even further. Forge development offers a solution by enabling administrators to customize Jira without traditional development overheads. This opens up new possibilities and enhances the platform's capabilities.

Customers use Jira in their own respective ways and some functionalities need custom solutions. In order to get a relatable use case for this blog, I browsed the public-facing Jira issue tracker and searched for Jira Cloud feature suggestions. I found this JRACLOUD-1991 - Custom fields for Projects GATHERING INTEREST and it felt like something Forge can help with. 

# Forge Jira Project Field

This project contains a Forge app written in JavaScript that adds a Project Settings page with a field to capture Team Size. 

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Register the app by running:
```
forge register
```

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:
```
forge tunnel
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.
- If `manifest.yml` is modified, run `forge deploy` again to reflect those changes then update the installation by running `forge install --upgrade`

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
