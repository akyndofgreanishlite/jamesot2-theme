---
layout: default
collection: projects
permalink: "/projects/"
description: index
---

<section>
  <h1 class="" id="projects">Projects</h1>
  <ul class="list-simple list-project">

    {% assign projects_sorted = site.projects | sort: 'num' %}
    {% for project in projects_sorted %}
    {% if project.description != 'index' %}
      <li>

        <!-- <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span> -->
        <span class="project-client">{{ project.client | escape }}</span>
        <h2>
          <a class="project-link" href="{{ project.url | relative_url }}">{{ project.title | escape }}</a>
        </h2>

        {% comment %}
        {% if project.description %}
        <p>{{ project.description | escape }}</p>
        {% endif %}
        {% endcomment %}

      </li>
    {% endif %}
    {% endfor %}

  </ul>
</section>
