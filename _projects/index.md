---
title: index
layout: project-list
collection: projects
permalink: "/projects/"
description: index
header: true
body_class: project-list
---
{% comment %} Force update now {% endcomment %}

<section>
  <h1 class="" id="projects">Projects</h1>
  <ul class="list-simple list-project">

    {% assign projects_sorted = site.projects | sort: 'num' %}
    {% for project in projects_sorted %}
    {% if project.description != 'index' %}
      <li>
        {% comment %}
        {% include image.html fig_class='' project='localytics' img_src='2-2013-to-2014' img_ext1='png' img_alt='Coolest image' fig_cap='' %}
        {% endcomment %}

        <!-- <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span> -->
        <span class="project-client">{{ project.client | escape }}</span>
        <h2>
          <a class="project-link" href="{{ project.url | relative_url }}">{{ project.title | escape }}</a>
        </h2>

        {% if project.description %}
        <p class="project-description">{{ project.description | escape }}</p>
        {% endif %}

      </li>
    {% endif %}
    {% endfor %}

  </ul>
</section>
