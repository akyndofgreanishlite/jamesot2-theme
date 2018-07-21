---
title: "An old project that has this title"
date: 2017-07-04 19:46:00 Z
permalink: "/projects/hooch-old/"
num: 1
client: Hooch
description: Bringing together happy hour enthusiasts, cocktail connoisseurs, and local venues
collection: projects
layout: project
---

#### Client Description

Hooch is a drink subscription service, focused on curating venues and drinks for it's members, offering 1 free drink a day. It also helps venues bring in paying customers and better understand their habits and demographics.

I joined Hooch in April 2017 as their lead product designer, focusing first on their consumer-facing native app for iOS & Android.

{% include image.html fig_class="fullbleed" project='hooch' img_src='hooch-basics' img_alt='Hooch Basics' %}



<div class="platform">Android / iOS</div>
## App React Native Rebuild
**In-progress.** In the past, we'd relied heavily on outside devs to build new features across Android and iOS. Quality was never consistent, and often back and forth before a build was ready created more work for our internal team than it saved.


To create a consistent experience, pay down product debt (design & tech), and ship faster to iOS and Android.

{% include image.html fig_class="large p-0" project='hooch' img_src='inputs-and-buttons' img_alt='Hooch Design System' fig_cap='' %}

I mapped out all existing flows and thoroughly documented the design system for our remote dev team.

Much of the feature work I'd done over the latter half of 2017 had been delayed because of bug fixes and marketing initiatives that required engineering effort.

#### Opportunities
- How could I best position the next designer taking on the lead design role?
- How could I make implementation of the redesign easier and higher quality, even if I wasn't there to guide it in person?

{% include image.html fig_class="p-0 outlined" project='hooch' img_src='hooch-subscribe-flow' img_alt='Hooch Subscribe Flow' fig_cap='Flow stack' %}

#### Takewaways
Bug fixes were eating up engineering bandwidth that could be used to improve the customer experience in more visible ways. Pausing to build a firm foundation was critical for evolving the product quickly over the coming year.

Well-implemented analytics help teams move more quickly, and should be high priority for product.

---

<div class="platform">Android / iOS</div>
## Sponsored Drinks
In the past, companies like Diageo (Johnny Walker, Ciroc, Tanqueray) had to rely on brand ambassadors to hand collect a limited sample of customer demographics and behavior. We wanted to provide a broader and more reliable sample.

{% include image.html fig_class="fullbleed" project='hooch' img_src='hooch-sponsored-drinks' img_alt='Hooch Sponsored Drinks' fig_cap='Hooch Sponsored Drinks' %}

#### Opportunities
[How can we do x for y customers?]
- How can we provide a way for free members to experience Hooch beyond the first free drink we currently offered?
- How can we create more opportunities for companies to promote their products?

#### Goals
- ↗️ Monetize free members
- Provide regular complimentary drinks for free members
- 🍷 Reduce the cost of Hooch redemptions for partner venues

#### Challenges
After talking to

#### Constraints
[Technology/business priorities/timeline]

{% include image.html fig_class="fullbleed" project='hooch' img_src='hooch-sponsored-explorations' img_alt='Hooch Sponsored Drink Design Explorations' %}

#### Explorations
[Iterations and feedback that drove changes]

After releasing the first version of sponsored drinks, based on feedback, we realized that

#### Takewaways
Takeaways go here.

---

<div class="platform">Android / iOS</div>
## Onboarding
I worked closely with leadership to understand what they'd seen when introducing the app to investors and friends, cataloguing key selling points and areas that turned off new members.

{% include image.html fig_class="fullbleed" project='hooch' img_src='hooch-onboarding' img_alt='Hooch Onboarding' fig_cap='' %}

#### Opportunities
- How could we make the onboarding process easier and provide the right information to potential members?
- How could we provide  value to potential members that didn't live in a city Hooch covered?

#### Goals
- Give the right amount of information about the service needed to make a purchase decision. Repetition and much detail about the business model were potentially confusing & unnecessarily lengthened the sign-up process.
- Increase the number of new users with active payment information to make subscriptions and tipping more seamless.
- Pay down design debt from several past partial redesigns.
{% comment %}Increase quality of members, both paid and free. We wanted more members that would be regular users and advocates for the brand. Measurable by redemptions over time, subscription purchases, and referrals.{% endcomment %}

{% comment %}{% include image.html fig_class="large" project='hooch' img_src='new-york_stk-rooftop_stk-rooftop' format1='jpg' format2='' img_alt='New York STK Rooftop Bar' fig_cap='' img_alt='Shot of someone onboarding' %}{% endcomment %}
![new-york_stk-rooftop_stk-rooftop.jpg](/assets/images/hooch/new-york_stk-rooftop_stk-rooftop.jpg)

#### Challenges
Through user interview we found the current number of onboarding steps was overwhelming for (x/y) users tested, even candidates that saw the value of a membership and completed sign-up. Users also mentioned that they would be more willing to sign-up for a paid subscription if we added better support for Apple and Google Pay.

Looking at Mixpanel, our biggest drop-off point was when asking them to choose a specific city (50%), likely because of the short list of cities we were currently available in, and was confirmed in interviews.

#### Constraints
[Technology/business priorities/timeline]

{% include image.html fig_class="outlined" project='hooch' img_src='hooch-onboarding-flow' fig_cap='' %}

#### Explorations
[Iterations and feedback that drove changes]
We tried shifting the

{% include image.html fig_class="fullbleed" project='hooch' img_src='hooch-onboarding-1' fig_cap='' %}
{% include image.html fig_class="fullbleed" project='hooch' img_src='hooch-onboarding-2' fig_cap='' %}


#### Takewaways
Talking about it.

---

<div class="platform">Android / iOS</div>
## Tipping
I worked closely with our operations team to understand the needs of our bartenders and members. Tipping for "free" drinks wasn't something our members were inclined to do on their own, making bartenders resent Hooch, in turn driving down both service quality and likelihood of tips.

{% include image.html fig_class="fullbleed" project='hooch' img_src='hooch-redeem' %}

#### Opportunities
- How could we improve Hooch's perceived value to bartenders, and in turn improve the service our all members receive?
- How could we ensure our bartenders receive their tips, without added effort for venues?

#### Goals
- ↗️ Increase the number of tips our bartenders receive and improve their perception of Hooch's value
- 💵 Make tipping as easy possible for our members, and set expectations for the amount expected per drink redemption
- 🤵 Improve the service our members receive when redeeming drinks
- 🍷 Increase venue retention as bartenders become Hooch advocates


#### Challenges
After rolling out the first iteration of the tipping feature, we found that venues were having to spend too much effort to distribute the tips and looked for ways to automate the payout per individual bartender.

{% include image.html fig_class="fullbleed" project='hooch' img_src='hooch-redeem' %}
{% comment %}{% include image.html fig_class="large" project='hooch' img_src='hooch-payment-edit' %}{% endcomment %}

#### Constraints
We couldn't add hardware to venues in the short-term to log tips per bartender, or expect venues to keep us up-to-date with employee schedules, so 3-digit codes were added to identify bartenders during the redemption process.

{% comment %}
#### Explorations
[Iterations and feedback that drove changes]
{% endcomment %}

#### Takewaways
- Our members
- Be as involved with other team's status updates as possible.
- Customer feedback can come in many forms, so even if direct customer interviews aren't an option, there are numerous other sources of customer insights to be found.
