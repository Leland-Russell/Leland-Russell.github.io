SOURCES := $(shell find . -type f -name '*.tex')

TEX := pdflatex

FILE := nothing.tex
#PDF := $(basename $(FILE)).pdf

.PHONY: all individual clean no_hup_clean

all:
#	echo $(SOURCES)
	$(foreach file, $(SOURCES), $(shell make individual FILE=$(file)))
	make clean

individual:
	$(TEX) $(FILE)

clean:
	make -ki no_hup_clean # so the rm calls don't error

no_hup_clean:
	rm *.out
	rm *.synctex.gz
	rm *.log
	rm *.aux
	rm *.fdb_latexmk
	# So the following commands don't error
	rm *.fls
	
