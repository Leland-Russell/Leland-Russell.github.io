BAKE_SOURCES := $(shell find ./ -type f -name '*.tex')

TEX := pdflatex

all:
	$(TEX) $(BAKE_SOURCES)
	make clean

clean:
	touch del.out
	touch del.synctex.gz
	touch del.log
	touch del.aux
	# So they following commands don't error
	rm *.out
	rm *.synctex.gz
	rm *.log
	rm *.aux
