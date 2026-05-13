const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') && f !== 'Home.jsx' && f !== 'MyStory.jsx' && f !== 'Articles.jsx');

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace opening div
  content = content.replace(/return \(\s*<div style={{ background: 'transparent'/g, "return (\n    <main style={{ background: 'transparent'");

  // Replace closing div before the end of the component
  // Usually it looks like:
  //     </div>
  //   );
  // }
  // OR
  //       `}</style>
  //     </div>
  //   );
  // }
  
  content = content.replace(/(<\/[a-z]+>|\s*)\s*<\/div>\s*\);\s*}\s*$/s, "$1\n    </main>\n  );\n}\n");

  // Also replace generic cards with article where appropriate, if we have class="podcast-card" or similar
  content = content.replace(/<div key={i} className="([^"]*-card)"/g, '<article key={i} className="$1"');
  content = content.replace(/<div className="([^"]*-card)"/g, '<article className="$1"');

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
