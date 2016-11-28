# Merging with conflicts...

We periodically re-run JSBeautify on the sources involved in this project.
This may cause developed patches to have a merge conflict, which can be
annoying. As such, rebase early, and rebase often.

If you notice style and whitespace problems in a file, before you edit 
the file for functionality, restyle it and commit just that change to
the tree.

Use the `style` script in this project. If you pass it a filename, it
will beautify just that file.

If no filename, but `git diff` lists changed files, style will 
beautify the files that have changed.

If neither of the above occurs, style will run against all css, html,
and js files in the tree (excluding bower, node, and external dirs)
