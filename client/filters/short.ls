Short = ->
	(id)->
		"(#{id.substring 0, 8})"

angular.module \uo
	.filter \shortId, Short

