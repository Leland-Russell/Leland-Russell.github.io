BAKE_SOURCES := $(shell find ./ -type f -name '*.tex')

TEX := pdflatex

all: # A little inneficient. Will compile all files. Will take almost no time though.
	$(TEX) $(BAKE_SOURCES)
	make clean

clean:
	touch del.out
	touch del.synctex.gz
	touch del.log
	touch del.aux
	# So the following commands don't error
	rm *.out
	rm *.synctex.gz
	rm *.log
	rm *.aux
