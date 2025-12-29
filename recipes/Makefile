all: .baking .cooking
	echo "Done with compilation"

.baking: baking/ current_style.sty
	make -C baking/ --ignore-errors
	touch .baking

.cooking: cooking/ current_style.sty
	make -C cooking/ --ignore-errors
	touch .cooking
