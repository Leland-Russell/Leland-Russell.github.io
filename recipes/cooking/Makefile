SOURCES := $(shell find . -type f -name '*.tex')

TEX := pdflatex

FILE := nothing.tex
#PDF := $(basename $(FILE)).pdf

.PHONY: all individual clean

all:
#	echo $(SOURCES)
	$(foreach file, $(SOURCES), $(shell make individual FILE=$(file)))
	make clean

individual:
	$(TEX) $(FILE)

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
