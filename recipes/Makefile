all: .baking .cooking
	echo "Done with compilation"
.baking: baking/
	make -C baking/
	touch .baking

.cooking: cooking/
	make -C cooking/
	touch .cooking
