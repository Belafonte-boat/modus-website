{"filter":false,"title":"config.rb","tooltip":"/config.rb","undoManager":{"mark":44,"position":44,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":12,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":32}},"text":"case ENV['TARGET'].to_s.downcase"},{"action":"insertText","range":{"start":{"row":12,"column":32},"end":{"row":13,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":13,"column":0},"end":{"row":25,"column":0}},"lines":["when 'production'","  activate :deploy do |deploy|","    deploy.method   = :rsync","    deploy.host     = \"www.example.com\"","    deploy.path     = \"/srv/www/production-site\"","  end","else","  activate :deploy do |deploy|","    deploy.method   = :rsync","    deploy.host     = \"staging.example.com\"","    deploy.path     = \"/srv/www/staging-site\"","  end"]},{"action":"insertText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":3}},"text":"end"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":45}},"text":"    deploy.path     = \"/srv/www/staging-site\""},{"action":"removeLines","range":{"start":{"row":21,"column":0},"end":{"row":23,"column":0}},"nl":"\n","lines":["    deploy.method   = :rsync","    deploy.host     = \"staging.example.com\""]},{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":22}},"text":"  deploy.method = :ftp"},{"action":"insertText","range":{"start":{"row":21,"column":22},"end":{"row":22,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":22,"column":0},"end":{"row":25,"column":0}},"lines":["  deploy.host = \"web332.webfaction.com\"","  deploy.user = \"piermaria\"","  deploy.password = \"Nonmelaricordo2\""]},{"action":"insertText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":47}},"text":"  deploy.path = \"/home/piermaria/webapps/modus\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":22,"column":0},"end":{"row":22,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":48}},"text":"    deploy.path     = \"/srv/www/production-site\""},{"action":"removeLines","range":{"start":{"row":16,"column":0},"end":{"row":17,"column":0}},"nl":"\n","lines":["    deploy.host     = \"www.example.com\""]},{"action":"removeText","range":{"start":{"row":15,"column":4},"end":{"row":15,"column":28}},"text":"deploy.method   = :rsync"},{"action":"removeText","range":{"start":{"row":15,"column":4},"end":{"row":16,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":15,"column":4},"end":{"row":15,"column":26}},"text":"  deploy.method = :ftp"},{"action":"insertText","range":{"start":{"row":15,"column":26},"end":{"row":16,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":16,"column":0},"end":{"row":19,"column":0}},"lines":["  deploy.host = \"web332.webfaction.com\"","  deploy.user = \"piermaria\"","  deploy.password = \"Nonmelaricordo2\""]},{"action":"insertText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":47}},"text":"  deploy.path = \"/home/piermaria/webapps/modus\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":4},"end":{"row":15,"column":6}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":2},"end":{"row":15,"column":4}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":2},"end":{"row":15,"column":4}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":3}},"text":"end"},{"action":"removeLines","range":{"start":{"row":2,"column":0},"end":{"row":10,"column":0}},"nl":"\n","lines":["","activate :deploy do |deploy|","  deploy.method = :ftp","  deploy.host = \"web332.webfaction.com\"","  deploy.user = \"piermaria\"","  deploy.password = \"Nonmelaricordo2\"","  deploy.path = \"/home/piermaria/webapps/modus\"","  "]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":19},"end":{"row":8,"column":40}},"text":"web332.webfaction.com"},{"action":"insertText","range":{"start":{"row":8,"column":19},"end":{"row":8,"column":41}},"text":"www.profumeriemodus.it"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":19},"end":{"row":9,"column":28}},"text":"piermaria"},{"action":"insertText","range":{"start":{"row":9,"column":19},"end":{"row":9,"column":41}},"text":"www.profumeriemodus.it"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":23},"end":{"row":10,"column":38}},"text":"Nonmelaricordo2"},{"action":"insertText","range":{"start":{"row":10,"column":23},"end":{"row":10,"column":33}},"text":"k32wh54jp8"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":21},"end":{"row":11,"column":48}},"text":"ome/piermaria/webapps/modus"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":20},"end":{"row":11,"column":21}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":20},"end":{"row":11,"column":21}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":21},"end":{"row":11,"column":22}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":22},"end":{"row":11,"column":23}},"text":"w"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":23},"end":{"row":11,"column":24}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":23},"end":{"row":11,"column":24}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":24},"end":{"row":12,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":4},"end":{"row":12,"column":30}},"text":"deploy.build_before = true"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":49},"end":{"row":21,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":4},"end":{"row":21,"column":30}},"text":"deploy.build_before = true"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":27},"end":{"row":32,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":0},"end":{"row":32,"column":45}},"text":"page \"/privacypolicy.html\", :layout => :html5"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":20},"end":{"row":32,"column":21}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":21},"end":{"row":32,"column":22}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":22},"end":{"row":32,"column":23}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":48},"end":{"row":32,"column":49}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":49},"end":{"row":32,"column":50}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":50},"end":{"row":32,"column":51}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":51},"end":{"row":32,"column":52}},"text":"j"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":52},"end":{"row":32,"column":53}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":45},"end":{"row":33,"column":46}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":46},"end":{"row":33,"column":47}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":47},"end":{"row":33,"column":48}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":48},"end":{"row":33,"column":49}},"text":"j"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":49},"end":{"row":33,"column":50}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":32,"column":48},"end":{"row":32,"column":49}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":48},"end":{"row":32,"column":49}},"text":"_"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":33,"column":45},"end":{"row":33,"column":46}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":45},"end":{"row":33,"column":46}},"text":"_"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":4},"end":{"row":12,"column":30}},"text":"deploy.build_before = true"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":4},"end":{"row":21,"column":30}},"text":"deploy.build_before = true"}]}]]},"ace":{"folds":[],"scrolltop":105,"scrollleft":0,"selection":{"start":{"row":21,"column":4},"end":{"row":21,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":"start","mode":"ace/mode/ruby"}},"timestamp":1407488019000,"hash":"908d8a62cd71c6d044b62fdf358718fc49c8f360"}