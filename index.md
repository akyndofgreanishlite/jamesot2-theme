---
title: Home
layout: home
header: false
---

{::options parse_block_html="true" /}
<section>
# Welcome

Some other text that might describe what you do.

</section>

{::options parse_block_html="true" /}
<section class="social">
* <a class="social social--email" href="{{site.email}}"></a>
* <a class="social social--linkedin" href="{{ site.linkedin_url }}"></a>
* <a class="social social--vsco" href="{{ site.vsco_url }}"></a>
</section>



{% comment %}

{% include image.html project='test' fig_class='fullbleed' img_src='sample' img_ext1='jpg' img_alt='Sample image' fig_cap='Sample image caption test oh yeah.' %}

{% include image.html fig_class='fullbleed' img_src='sample' img_ext1='jpg' img_alt='Sample image' %}

{% include image.html project='test' fig_class='fullbleed' img_src='sample' img_alt='Sample image' %}

{% endcomment %}
