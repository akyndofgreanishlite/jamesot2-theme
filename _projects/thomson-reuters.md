---
title: Bringing corporate accounting into the 21st century
date: 2017-10-14 19:46:00 Z
permalink: "/projects/thomson-reuters/"
num: 2
client: Thomson Reuters
description: Thomson Reuters description goes here and runs for around a sentence
  or so
collection: projects
layout: project
---

#### Client description

Onesource Corporate Tax is a suite of data collection & reporting tools built by Thomson Reuters and used by corporate accountants (in 180 countries and at companies like IBM, Ford, and BP) to stay in compliance with tax law, avoiding costly penalties and audits.

I joined Thomson Reuters as a Senior Product Designer in Summer 2017, leading a redesign of their Dataflow data request management tool that powers many of the 190 tax reporting tools in Onesource. I also helped pitch a redesign of their Tax Provision Software, and contributed to the Bento Design System.

In my time at Thomson Reuters, my role spanned the full lean UX design process—from scripting and prototyping for user research, 
interaction & visual design, and shepherding implmementation.

{% include image.html fig_class='fullbleed' project='thomson-reuters' img_src='tr-hero' img_ext1='png' %}

---

<div class="platform">Web</div>
## Dataflow

I worked closely with the product and engineering teams to migrate Dataflow and improve the experience for tax data managers, preparers/reviewers, and data providers.

{% include image.html fig_class='fullbleed' project='thomson-reuters' img_src='dataflow-screens-layered' img_ext1='png' %}

#### Opportunities
[How can we do x for y customers?]
How could we improve the experience for preparers/managers and external data providers, helping them focus on the entering and reviewing data and spend less time managing requests? How could we highlight tasks and facilitate communication if questions arose? How could we better communicate progress?

#### Goals
- ⏱ Decrease time spent managing data requests (Managers/Preparers)
- 🕺 Give more flexibility when editing requests (changing assignments & templates)
{% comment %} - 🔎 Make assignments more specific, so individual contributors could focus on their tasks and not be concerned about the overarching process {% endcomment %} 
- 🙌 Better facilitate collaboration by creating clearly defined roles and assignments, and increase visibility into request status
- Improve how we present new and existing functionality to our customers. The product often assumed users were well-versed with a feature or settings, and didn't provide enough context for new users.
- Facilitate users leaving and joining an organization > Inheriting tasks and permissions of previous employee
- Earn back trust lost by buggy past releases by being proactive about communicating changes, improving QA and process within the TR product release cycle
	{% comment %}, and providing documentation for learning{% endcomment %}
	{% comment %}- 💗 Begin gathering usage behavior through new analytics implementation{% endcomment %}

{% include image.html fig_class='full' project='thomson-reuters' img_src='dataflow-user-journey' img_ext1='png' %}

#### Challenges
Through research and user testing we identified following areas that were high impact and low cost:
- A way for managers and data providers to easily identify needed high risk requests, including those that had errors or approaching due dates.
- Customers needed to communicate with their teammates. The existing Notes feature was too limited for effective collaboration, pushing them outside the platform to email and other tools and increasing chances that communication would be lost or ignored.
- Managers needed batch request editing, especially for assignments.
- Managers wanted quick insights into overall completion and distribution of status and location.

#### Constraints
[Technology/business priorities/timeline]
- We wanted to improve the request management experience in a more drastic way, but the short development timeline meant we needed to limit the number of short-term changes to a handful that would have the biggest customer impact.
- Product analytics weren't implemented, so any behavioral analysis was limited to what we observed in testing or were told about from our sales and integration teams.
- There weren't any front-end experts on the feature team, so I needed to facilitate implementation by knowing the available components and design patterns inside and out, and finding further resources when needed.

{% include image.html fig_class='full' project='thomson-reuters' img_src='dataflow-user-roles-tasks' img_ext1='png' img_alt='Dataflow User Journey' %}

#### Explorations
[Iterations and feedback that drove changes]
We mapped out all of the primary tasks by user role, and focused on the areas with the most overlap.
- Managing data requests was a task both Executive

We validated the changes with 6 formal user testing sessions (, informal calls, and a customer committee), interviewing a total of ~~X implementors and managers~~ at firms and corporations, including PricewaterhouseCoopers, Ernst Young, BP, and Ford. We also provided mocks & a script to our integrations team for informal testing overseas, shared with Canon, Konica-Minolta, Nissan, and Toshiba in Japan.

{% include image.html fig_class='fullbleed' project='thomson-reuters' img_src='dataflow-edit-assignments' img_ext1='jpg' img_alt='Request Wizard'%}

^ Process work could be included here, mentioning how we arrived at the MVP solution, and how we planned to evolve it.

One of the biggest complaints was around reassignments, because when assignments were edited, selections were either applied to all or none of the selected requests, vs retaining the existing partial (or soft) selection. I tested a label that gave a count of requests a user was assigned to (with details on hover), and users found this to be a big improvement. We also introduced more granular controls for notifications that helped reduce the spam emails our customers were receiving on assignment changes.

{% include image.html fig_class='fullbleed' project='thomson-reuters' img_src='dataflow-card-filters' img_ext1='png' img_alt='Filtering shortcuts close-up' fig_cap='Filtering shortcuts close-up' %}

{% include image.html fig_class='fullbleed' project='thomson-reuters' img_src='dataflow-dashboard-alt' img_ext1='png' img_alt='Manager Dashboard in Dataflow' fig_cap='Metrics and completion data for managers and executives' %}

{% include image.html fig_class='fullbleed' project='thomson-reuters' img_src='dataflow-threaded-notes' img_ext1='jpg' img_alt='Threaded notes for more nuanced collaboration' fig_cap='Threaded notes for more nuanced collaboration' %}

{% include image.html fig_class='fullbleed' project='thomson-reuters' img_src='dataflow-copywriting' img_ext1='jpg' img_alt='UI Copywriting in Excel' fig_cap='Clearer and consistent UI copywriting for label, help text, and errors' %}

Making the application more accessible to new users often boiled down to better copywriting. Being more explicit, and questioning whether a feature description or form requirement made sense to a layman was a good start.



#### Takewaways
- Team structure and roles within Agile aren't constants — actively seeking to understand what responsibilities needed to be covered to improve my teams morale & output.
- There's a large opportunity for automation in business software… helping people focus on unique tasks.
- When updating with old, complex software the unknowns are almost never going to all be captured at once. I learned to be more flexible and view new findings in a positive light.
- Always invest time in understanding all user roles involved, even if it takes more legwork. It will not only improve the experience for those specific roles, but also how they contribute to the whole.
- Scoping prototypes was something that I improved
- If there had been more time, I would've liked to have further tested further iterations of the request creation wizard, and  Roll Forward scheduling, since these were both areas that had the most concentrated customer feedback.
- Even if access to customers is traditionally limited to formal user research in an organization, advocating for more informal and frequent conversations to understand use cases can't be stressed enough.

---

<div class="platform">Web</div>
## Bento Design System
As I saw opportunities for improvements in the Bento Design system (used across all Thomson Reuters products), I submitted proposals to outline opportunities for improvement and

{% include image.html fig_class='fullbleed' project='thomson-reuters' img_src='bento-spread' img_ext1='png' img_alt='New design docs proposal' %}

**Live, integrated documentation** Design and development docs had been separated, causing designers and developers to jump between two different websites to understand component modifiers/options and usage guidelines. I proposed a combined solution that helped increase devs understanding of patterns, and designers awareness of states and supported …

{% include image.html fig_class='fullbleed' project='thomson-reuters' img_src='bento-toolbars' img_ext1='png' img_alt='Toolbars + inline actions within data grids' %}

Most products ran into issues with toolbars containing an unholy amount of actions, many only available when a row or rows were selected.

{% include image.html fig_class='fullbleed' project='thomson-reuters' img_src='bento-core-variables' img_ext1='png' img_alt='Bento core design variables' %}

asdfas

Core styles like color semantics, border radii, elevations, and icon sizing were inconsistent across the design system. I tried to make this easier to use for new and existing designers by reducing it down to the necessities and helping point out inconsistencies in implementation. It also helped reduce errors by offshore developers as an added benefit.

---

<div class="platform">Web</div>
## OTP Reporting
As a Senior Product Designer, [did what?]
Technology improved, so the reporting experience needed to be rethought to uncover how to put the newfound speed to best use.

{% include image.html fig_class='fullbleed' project='thomson-reuters' img_src='' img_ext1='png' img_alt='OneSource Tax Provision Reporting' %}
