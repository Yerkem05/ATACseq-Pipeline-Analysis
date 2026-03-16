# ATAC-seq Pipeline Analysis

A comprehensive, chapter-by-chapter tutorial that walks wet-lab researchers and computational biology students through a complete ATAC-seq data analysis pipeline — from raw sequencing reads to biological interpretation.

## Overview

ATAC-seq (Assay for Transposase-Accessible Chromatin using sequencing) is a widely used method for profiling open chromatin regions across the genome. This project presents the full analysis workflow as an interactive, browser-based guide organized into 13 chapters.

## Chapters

| # | Title | Topics Covered |
|---|-------|---------------|
| 1 | Introduction to ATAC-seq Analysis Pipeline | ATAC-seq biology, paired-end sequencing, three-stage pipeline overview |
| 2 | Project Organization | Reproducible directory structure, data management best practices |
| 3 | Conda Setup on macOS (Apple Silicon) | Miniconda installation, Bioconda configuration, environment management |
| 4 | The Quality Check (FastQC) | Raw data retrieval, subsampling with seqtk, FastQC execution |
| 5 | FastQC Results: Interpreting the Report | Quality metrics, per-base quality, GC content, duplication levels |
| 6 | Adapter Trimming | Removing adapter sequences and low-quality bases with trimming tools |
| 7 | Genome Alignment | Read mapping to a reference genome with Bowtie2/BWA |
| 8 | Peak Calling and QC | Identifying open chromatin regions with MACS2, quality control |
| 9 | Visualization: Seeing is Believing | BAM to BigWig conversion with bedtools, coverage tracks |
| 10 | Visualization: Genome Browser | Navigating IGV Web App, visual sanity checks on ATAC-seq results |
| 11 | Exploring Your Peaks | Parsing narrowPeak files, ranking peaks by statistical strength |
| 12 | Peak Annotation with GREAT | Genomic annotation, pathway enrichment, promoter vs enhancer analysis |
| 13 | Motif Enrichment with MEME Suite | Peak sequence extraction, AME motif enrichment, transcription factor analysis |

## Getting Started

The tutorial is a static website. To view it locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/ATACseq-Pipeline-Analysis.git
   cd ATACseq-Pipeline-Analysis
   ```
2. Open `index.html` in your browser, or serve it locally:
   ```bash
   python3 -m http.server 8000
   ```
3. Navigate to `http://localhost:8000` and start reading from Chapter 1.

## Project Structure

```
ATACseq-Pipeline-Analysis/
├── index.html          # Landing page with links to all chapters
├── style.css           # Site-wide stylesheet
├── chapters/           # Individual chapter HTML files
│   ├── chapter_1.html
│   ├── chapter_2.html
│   ├── ...
│   └── blog-post-ui.js # Shared UI utilities for chapter pages
├── images/             # Figures, diagrams, and screenshots
├── LICENSE             # MIT License
└── README.md
```

## Tools Covered

The tutorial references the following bioinformatics tools throughout the pipeline:

- **Conda / Miniconda** — environment and package management
- **seqtk** — FASTQ subsampling
- **FastQC** — read quality assessment
- **Trimmomatic / fastp** — adapter and quality trimming
- **Bowtie2** — short-read alignment
- **SAMtools** — BAM file manipulation
- **MACS2** — peak calling
- **bedtools** — genomic interval operations and BAM-to-BigWig conversion
- **IGV** — genome browser visualization
- **GREAT** — genomic region annotation and enrichment
- **MEME Suite (AME)** — transcription factor motif enrichment

## Author

**Yerkem Shakhman**

## License

This project is licensed under the [MIT License](LICENSE).
