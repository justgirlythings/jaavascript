 {% for post in site.posts %}
 $( "*#{{ post.title }}" ).click(function() {
	 $( "#T{{ post.title }}" ).toggle("show");
 });
 {% endfor %}
 