# Version 10.1 publishing checklist

Do not publish this directory until Nazeem explicitly approves it.

## Portfolio repository

- Replace the existing public portfolio only after the final local review.
- Make sure the repository description matches the site: `Entry-level IT support and network technician portfolio with troubleshooting, Cisco IOS, and homelab case studies.`
- Confirm `CNAME`, the custom domain, and the resume PDF are correct.
- Run `npm run check` immediately before publishing.

## GitHub profile

Suggested bio:

> Entry-level IT support and network technician. Windows troubleshooting, Cisco IOS practice, and a documented three-node Proxmox homelab.

Suggested pinned order:

1. Portfolio version 10.1
2. A public-safe Cisco IOS lab repository, after it is ready
3. Technitium Dynamic Split Horizon, after its public documentation is reviewed

Avoid calling a homelab `production-grade`. Use `production-style` or `operated homelab` instead.

## Public evidence

- Publish only sanitized Cisco material that contains no licensed images or private infrastructure data.
- Keep homelab IP addresses, account names, keys, tokens, provider configuration, and raw firewall exports private.
- If the Cisco repository becomes public, add its URL to the Cisco case study and evidence page.
- State the exact contribution to collaborative repositories owned by someone else.

## Contact and consistency

- Keep the public site focused on email and LinkedIn.
- The personal phone number appears only on the resume page and PDF.
- Confirm the same primary role appears on the site, resume, LinkedIn headline, and GitHub profile.
