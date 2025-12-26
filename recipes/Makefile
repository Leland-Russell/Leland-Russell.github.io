all: .baking .cooking
	echo "Done with compilation"

.baking: baking/
	make -C baking/ --ignore-errors
	touch .baking

.cooking: cooking/
	make -C cooking/ --ignore-errors
	touch .cooking
