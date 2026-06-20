SOURCES := $(shell find . -type f -name '*.tex')

TEX := pdflatex

FILE := nothing.tex
#PDF := $(basename $(FILE)).pdf

.PHONY: all individual clean

all:
#	echo $(SOURCES)
	-$(foreach file, $(SOURCES), $(shell make individual FILE=$(file)))
	-make clean

individual:
#	echo "$(FILE)\n"
	$(TEX) $(FILE)

clean:
	-rm *.out
	-rm *.synctex.gz
	-rm *.log
	-rm *.aux
	-rm *.fdb_latexmk
	-rm *.fls
	
